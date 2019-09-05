json.array! @posts do |post|
  json.body post.body
  json.image post.image
  json.created_at post.created_at
  json.user_name post.user.name
  json.id post.id
end