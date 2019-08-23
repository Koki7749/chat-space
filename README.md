# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|name|integer|null: false|

# Association
- has_many :groups_users
- has_many :groups, through: :groups_users
- has_meny :messages

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false|
|group_name|integer|null: false|

## Association
- has_many :groups_users
- has_many :users, through: :groups_users
- belongs_to :messages

### groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :groups
- belongs_to :users

#### messagesテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|body|integer|
|image|string|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

#### Association
- belongs_to :users
- belongs_to :groups