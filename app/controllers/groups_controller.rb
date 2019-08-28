class GroupsController < ApplicationController

def new
end

def create
  Groups.create(name: group_params[:name])
end

def edit
  @group = Groups.find(params[:id])

end

def update
end

private
def group_params
  params.permit(:name)
end
