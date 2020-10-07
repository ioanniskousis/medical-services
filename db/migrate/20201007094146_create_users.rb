class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username, null: false, limit: 6, index: { unique: true }
      t.string :password, null: false, limit: 6, index: { unique: true }
      t.string :fullname, null: false, limit: 6
      t.string :email, null: false, limit: 6, index: { unique: true }

      t.timestamps
    end
  end
end
