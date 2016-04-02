class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email
      t.string :first_name
      t.string :last_name
      t.string :street_address
      t.string :city
      t.string :state
      t.integer :zip_code
      t.float :latitude
      t.float :longitude
      t.string :cell_phone

      t.timestamps null: false
    end
  end
end
