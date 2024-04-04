import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { PluginService } from './plugin.service'
import { ServiceDto } from './dto/service.dto'
import { ethers } from 'ethers'

@Controller('/plugin/subscription')
export class PluginController {
  constructor(private readonly pluginService: PluginService) {}

  @Post('/services')
  async createService(@Body() service: ServiceDto) {
    return await this.pluginService.createService(service)
  }

  @Get('/services')
  async getAllServices() {
    return await this.pluginService.getAllServices()
  }

  @Get('/services/:id')
  async getServiceById(@Param('id') id: string) {
    return await this.pluginService.getServiceById(id)
  }

  @Put('/services/:id')
  async updateService(@Param('id') id: string, @Body() service: ServiceDto) {
    return await this.pluginService.updateService(id, service)
  }

  @Delete('/services/:id')
  async deleteService(@Param('id') id: string) {
    return await this.pluginService.deleteService(id)
  }

  @Post('/services/:service/subscribe/')
  async subscribeService(@Param('service') service: string, @Body('address') subscriber: string) {
    // Check is the owner
    return await this.pluginService.subscribeService(subscriber, service)
  }
}
