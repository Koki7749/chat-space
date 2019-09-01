json.body  @post.body
json.image  @post.image.url
json.user_id  @post.user_id
json.created_at  @post.created_at.strftime("%Y年 %m月 %d日 %H時%M分")
json.user_name  @post.user.name
