class CreateFinancas < ActiveRecord::Migration[7.1]
  def change
    create_table :financas do |t|
      t.string :descricao
      t.integer :tipo_entrada
      t.float :valor, precision: 8, scale: 2

      t.timestamps
    end
  end
end
