import PocketBase from "pocketbase";
import {type TypedPocketBase} from './pocketbase-types'
export const pocketbase = new PocketBase('https://pocketbase.wasimhub.dev')as TypedPocketBase;
