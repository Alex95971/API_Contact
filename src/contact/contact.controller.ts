import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactEntity } from './contact.entity/contact.entity';

@Controller('contact')
export class ContactController {
    constructor(private service: ContactService){}

    @Get()
    getAll(){
        return this.service.getContacts()
    }

    @Get(':id')
    getContactId(@Param() params){
        return this.service.getContact(params.id)
    }

    @Post('new')
    create(@Body() contact: ContactEntity){
        return this.service.postContact(contact)
    }

    @Put(':id')
    update(@Param() param, @Body() contact: ContactEntity){
        return this.service.putContact(param.id ,contact)
    }

    @Delete(':id')
    delete(@Param() param){
        return this.service.deleteContact(param.id)
    }

}
