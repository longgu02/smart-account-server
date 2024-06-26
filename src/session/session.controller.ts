import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req } from '@nestjs/common'
import { SessionDto } from './dto/session.dto'
import { SessionService } from './session.service'
import { EditSessionDto } from './dto/editSession.dto'

@Controller('/session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Get('/all')
  getSessions() {
    return []
  }

  @Post('/')
  createSession(@Body() sessionDto: SessionDto) {
    return this.sessionService.createSession(sessionDto)
  }

  @Put('/:id')
  editSession(@Param('id') id: string, @Body() editSessionDto: EditSessionDto) {
    // Authorize the request
    // ...
    return this.sessionService.editSession(id, editSessionDto)
  }

  @Get('/')
  async getAccountSession(@Query('account') account: string, @Query('address') address: string) {
    // Authorize the request
    // ...
    const result: { ownSession?: Array<SessionDto>; authorizedSession?: Array<SessionDto> } = {}
    if (account) {
      result.ownSession = await this.sessionService.getAccountSession(account)
    }
    if (address) {
      result.authorizedSession = await this.sessionService.getAuthorizedSession(address)
    }
    return result
  }

  @Delete('/:id')
  async removeSession(@Param('id') id: string) {
    const deleted = this.sessionService.removeSession(id)
    return {
      id: id,
      message: deleted ? 'Session removed successfully' : 'An Error has occurred'
    }
  }

  @Get('merkle/:id')
  async getSessionMerkleTree(@Param('id') id: string) {
    return await this.sessionService.getSessionMerkleTree(id)
  }
}
