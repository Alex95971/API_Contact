import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactEntity } from '../contact/contact.entity/contact.entity'
import { Repository } from 'typeorm';

@Injectable()
export class ContactService {

    constructor(@InjectRepository(ContactEntity) private contactRepository: Repository<ContactEntity> ){}

    async getContacts(): Promise<ContactEntity[]>{
        return await this.contactRepository.find() //Retourne tous les contacts de type Contacts
    }


    async getContact(id: number): Promise<ContactEntity[]>{
        return await this.contactRepository.find({
            where: [{"id": id} ]
        });
    }

    async postContact(body: ContactEntity): Promise<ContactEntity>{
        const newContact = await this.contactRepository.create(body)

        return await this.contactRepository.save(newContact)
    }

    async putContact(id: number, body: ContactEntity): Promise<ContactEntity>{
        const contact = await this.contactRepository.findOne({
             where: {id}
        })

        if(!contact){
            throw new NotFoundException("Ce contact n\'existe pas")
        }

        contact.lastname = body.lastname
        contact.firstname = body.firstname
        contact.email = body.email
        contact.phone = body.phone

        return await this.contactRepository.save(contact)
    }

    async deleteContact(id: number){
        const contact = await this.contactRepository.findOne({
            where: {id}
        })

        if(!contact){
            throw new NotFoundException("Ce contact n\'existe pas")
        }

        await this.contactRepository.remove(contact)

        return contact;
    }
}
