class GraphqlController < ApplicationController

  def new
  end

  def create
    query_string = params[:query]
    query_variables = ensure_hash(params[:variables])
    result = CapstoneSchema.execute(
      query_string,
      variables: query_variables,
      context: {
        optics_agent: env[:optics_agent].with_document(query_string)
      }
    )
    render json: result
  end

  private

    def ensure_hash(query_variables)
      if query_variables.blank?
        {}
      elsif query_variables.is_a?(String)
        JSON.parse(query_variables)
      else
        query_variables
      end
    end
end