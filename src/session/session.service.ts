import { Injectable, NotFoundException } from '@nestjs/common'
import { Session } from './schemas/session.schema'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { SessionDto } from './dto/session.dto'
import { EditSessionDto } from './dto/editSession.dto'
import { genMerkleTree } from 'src/utils/session'
import { SM_ADDRESS } from 'src/constant/addresses'

@Injectable()
export class SessionService {
  constructor(@InjectModel(Session.name) private sessionModel: Model<Session>) {}
  async getSessions(accountAddress: string) {
    const sessions = await this.sessionModel.find({})
    return sessions
  }

  async createSession(sessionDto: SessionDto) {
    const newSession = new this.sessionModel({
      account: sessionDto.account,
      authorized: sessionDto.authorized,
      validAfter: sessionDto.validAfter,
      validUntil: sessionDto.validUntil,
      sessionVerificationModule: sessionDto.sessionVerificationModule,
      token: sessionDto.token,
      receiver: sessionDto.receiver,
      limit: sessionDto.limit
    })

    await newSession.save()
    return newSession
  }

  async editSession(id: string, editSessionDto: EditSessionDto) {
    const updatedSession = await this.sessionModel.findByIdAndUpdate(id, editSessionDto, { new: true })
    if (!updatedSession) {
      throw new NotFoundException(`Session with ID ${id} not found`)
    }
    return updatedSession
  }

  async getAccountSession(account: string) {
    const matchedSession = await this.sessionModel.find({ account: account })
    return matchedSession
  }

  async getAuthorizedSession(address: string) {
    const matchedSession = await this.sessionModel.find({ authorized: address })
    return matchedSession
  }

  async removeSession(id: string) {
    const deletedSession = await this.sessionModel.findByIdAndDelete(id)
    if (!deletedSession) {
      throw new NotFoundException(`Session with ID ${id} not found`)
    }
    return true
  }

  async getSessionMerkleTree(id: string) {
    const session = await this.sessionModel.findById(id)
    const { merkleTree, data, proof } = await genMerkleTree(session.sessionVerificationModule, {
      address: session.authorized,
      recipient: session.receiver,
      maxAmount: BigInt(session.limit)
    })
    return { merkleTree, data, proof, root: merkleTree.getHexRoot() }
  }
}
