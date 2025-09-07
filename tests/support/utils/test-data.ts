import {faker} from '@faker-js/faker';

interface TestData {
    auth: {
        login: {
            username: string;
            password: string;
        }

        register: {
            firstName: string;
            lastName: string;
            address: string;
            city: string;
            state: string;
            zipCode: string;
            phone: string;
            ssn: string;
            username: string;
            password: string;
        }


        }
    }
 


        export const testdata : TestData = {
            auth: {
                login: {
                    username: 'auto-testere',
                    password: 'Parola123!!'
                },


             register: {
                firstName: faker.person.firstName(),
                lastName: faker.person.lastName(),
                address: faker.location.streetAddress(),
                city: faker.location.city(),
                state: faker.location.state(),
                zipCode: faker.location.zipCode(),
                phone: faker.phone.number({ style: 'national'}),
                ssn: faker.string.numeric(9),
                username: `user-${faker.string.alphanumeric(5)}`,
                password: 'Parola123!!'
             }
                
            }
            
        }