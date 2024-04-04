import { Injectable } from '@nestjs/common'
import { Service } from './schemas/service.schema'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Subscription } from 'rxjs'
import { ServiceDto } from './dto/service.dto'
import { AccountService } from 'src/account/account.service'
import { Account } from 'src/account/schemas/account.schema'

@Injectable()
export class PluginService {
  constructor(
    @InjectModel(Service.name) private serviceModel: Model<Service>,
    @InjectModel(Subscription.name) private subscriptionModel: Model<Subscription>,
    @InjectModel(Subscription.name) private accountModel: Model<Account>
  ) {}

  async createService(service: ServiceDto): Promise<Service> {
    const newService = await this.serviceModel.create({
      name: service.name,
      address: service.address,
      amount: service.amount,
      period: service.period,
      description: service.description,
      logo: service.logo
    })
    await newService.save()
    return newService
  }

  async getAllServices() {
    return await this.serviceModel.find({})
  }

  async getServiceById(id: string): Promise<ServiceDto> {
    return await this.serviceModel.findById(id).exec()
  }

  async updateService(id: string, service: ServiceDto): Promise<ServiceDto> {
    return await this.serviceModel.findByIdAndUpdate(id, service, { new: true }).exec()
  }

  async deleteService(id: string): Promise<ServiceDto> {
    return await this.serviceModel.findByIdAndDelete(id)
  }

  async subscribeService(subscriber: string, service: string) {
    const matchedService = await this.serviceModel.findOne({ address: service })
    console.log({ service: service, subscriber: subscriber })
    if (!matchedService) {
      return {
        message: 'Service not found'
      }
    }
    const subscription = await this.subscriptionModel.findOne({ beneficiary: service, subscriber: subscriber })
    if (subscription) {
      return {
        message: 'Already subscribed'
      }
    }
    const newSubscription = await this.subscriptionModel.create({
      beneficiary: service,
      subscriber: subscriber,
      amount: matchedService.amount,
      lastReceived: '0',
      enabled: true
    })
    newSubscription.save()
    return newSubscription
  }

  public async isPluginInstalled(address: string, pluginAddress: string) {
    const matchedAccount = await this.accountModel.findOne({ address: address })
    const installedPlugin = matchedAccount.installedPlugin
    return installedPlugin.includes(pluginAddress)
  }
}
