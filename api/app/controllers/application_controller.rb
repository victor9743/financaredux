class ApplicationController < ActionController::API
  def formatar_valor(valor)
    return format("%.2f", valor)
  end
end
