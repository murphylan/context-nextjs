import { Client, Account, ID } from 'appwrite';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('64b158c5dfe253647fd9');
export const account = new Account(client);
