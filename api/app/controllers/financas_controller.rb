class FinancasController < ApplicationController
  def index
    begin
      @financas = Financa.all

      render json: @financas, status: :ok
    rescue ActiveRecord::RecordNotFound => e
      render json: { message: e.message }, status: :not_found
    rescue StandardError => e
      render json: { message: e.message }, status: :internal_server_error
    end
  end

  def show
    begin
      @financa = Financa.find(params[:id])

      render json: @financa, status: :ok
    rescue ActiveRecord::RecordNotFound => e
      render json: { message: e.message }, status: :not_found
    rescue StandardError => e
      render json: { message: e.message }, status: :internal_server_error
    end
  end

  def create
    begin
      Financa.new(
        descricao: params[:descricao],
        tipo_entrada: params[:tipo_entrada],
        valor: formatar_valor(params[:valor])
      ).save

      render json: { message: "Item salvo com sucesso!"}, status: :ok
    rescue ActiveRecord::RecordNotFound => e
      render json: { message: e.message }, status: :not_found
    rescue StandardError => e
      render json: { message: e.message }, status: :internal_server_error
    end
  end

  def update
    begin
      Financa.find(params[:id]).update(
        descricao: params[:descricao],
        tipo_entrada: params[:tipo_entrada],
        valor: format_valor(params[:valor])
      )

      render json: { message: "Item salvo com sucesso!"}, status: :ok
    rescue ActiveRecord::RecordNotFound => e
      render json: { message: e.message }, status: :not_found
    rescue StandardError => e
      render json: { message: e.message }, status: :internal_server_error
    end
  end

  def destroy
    begin
      Financa.find(params[:id]).destroy

      render json: { message: "Item removido com sucesso!"}, status: :ok
    rescue ActiveRecord::RecordNotFound => e
      render json: { message: e.message }, status: :not_found
    rescue StandardError => e
      render json: { message: e.message }, status: :internal_server_error
    end
  end
end
