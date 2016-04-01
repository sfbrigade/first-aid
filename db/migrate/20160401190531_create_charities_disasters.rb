class CreateCharitiesDisasters < ActiveRecord::Migration
  def change
    create_table :charities_disasters do |t|
      t.integer :charity_id
      t.integer :disaster_id

      t.timestamps null: false
    end
  end
end
