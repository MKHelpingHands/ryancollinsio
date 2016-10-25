ProjectType = GraphQL::ObjectType.define do
  name 'Project'
  description 'The application, non auth user type'
  field :id, !types.ID, 'The id of the project'
  field :title, !types.String, 'The title of the project'
  field :slug, !types.String, 'The slug for the project'
  field :description, types.String, 'The description of the project'
  field :caption, types.String, 'The caption of the project'
  field :milestones, types.String, 'The project milestones'
  field :repoUrl, types.String, 'The repository Url'
  field :category, types.String, 'The category'
  field :user, UserType, 'The user that made the project'
  field :created_at, types.String, 'Date project was created'
  field :updated_at, types.String, 'Date project was updated'
  field :featureImage, types.String, 'The feature imaged'
  field :projectUrl, types.String, 'The url of the project'
  field :technicalInformation, types.String, 'The technical info of the project'
  field :designPatterns, types.String, 'The design patterns of the project'
  field :reviewerName, types.String, 'The reviewer name of the project'
  field :technicalReview, types.String, 'The Technical Review of the project'
  field :images, types[ProjectImageType], 'Associated images for the project'
end
