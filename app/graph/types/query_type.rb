QueryType = GraphQL::ObjectType.define do
  name 'Query'
  description 'The root level query type'
  field :user, UserType do
    argument :id, !types.ID
    resolve -> (obj, args, ctx) do
      User.find_by(id: args[:id])
    end
  end
  field :projects, types[ProjectType] do
    resolve -> (obj, args, ctx) do
      Project.all
    end
  end
  field :project, ProjectType do
    argument :id, types.ID
    argument :slug, types.String
    resolve -> (obj, args, ctx) do
      if args[:id]
        Project.find_by(id: args[:id])
      elsif args[:slug]
        Project.find_by(slug: args[:slug])
      else
        Project.all.first
      end
    end
  end
end
