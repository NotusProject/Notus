/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Chats = "chats",
	FriendRequests = "friend_requests",
	Messages = "messages",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type ChatsRecord = {
	field?: RecordIdString[]
	relation?: RecordIdString[]
}

export enum FriendRequestsStatusOptions {
	"pending" = "pending",
	"accepted" = "accepted",
	"declined" = "declined",
}
export type FriendRequestsRecord = {
	recipient?: RecordIdString
	sender?: RecordIdString
	status?: FriendRequestsStatusOptions
}

export type MessagesRecord = {
	chat_id?: RecordIdString
	content?: string
}

export type UsersRecord = {
	avatar?: string
	friends?: RecordIdString[]
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type ChatsResponse<Texpand = unknown> = Required<ChatsRecord> & BaseSystemFields<Texpand>
export type FriendRequestsResponse<Texpand = unknown> = Required<FriendRequestsRecord> & BaseSystemFields<Texpand>
export type MessagesResponse<Texpand = unknown> = Required<MessagesRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	chats: ChatsRecord
	friend_requests: FriendRequestsRecord
	messages: MessagesRecord
	users: UsersRecord
}

export type CollectionResponses = {
	chats: ChatsResponse
	friend_requests: FriendRequestsResponse
	messages: MessagesResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'chats'): RecordService<ChatsResponse>
	collection(idOrName: 'friend_requests'): RecordService<FriendRequestsResponse>
	collection(idOrName: 'messages'): RecordService<MessagesResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
