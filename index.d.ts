import { Client } from '@elastic/elasticsearch';

declare module 'egg' {
  interface SingletonWrapper<T> {
    get(name: string): T
  }
  interface Application {
    elasticsearch: Client & SingletonWrapper<Client>;
  }
}
