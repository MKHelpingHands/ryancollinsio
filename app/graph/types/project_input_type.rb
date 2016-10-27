ProjectInputType = GraphQL::InputObjectType.define do
  name 'ProjectInput'
  description 'The user entered project input type'
  input_field :title, !types.String, 'The title of the project'
  input_field :description, types.String, 'The description of the project'
  input_field :caption, types.String, 'The caption of the project'
  input_field :featureImage, types.String, 'The featureImage of the project'
  input_field :projectUrl, types.String, 'The projectUrl of the project'
  input_field :repoUrl, types.String, 'The repoUrl of the project'
  input_field :milestones, types.String, 'The milestones of the project'
  input_field :designPatterns, types.String, 'The designPatterns of the project'
  input_field :technicalInformation, types.String, 'The technicalInformation of the project'
  input_field :technicalReview, types.String, 'The technicalReview of the project'
  input_field :reviewerName, types.String, 'The reviewerName of the project'
  input_field :category, types.String, 'The category of the project'
  input_field :tags, -> { types[TagInputType] }, 'The associated tags for the project'
end
