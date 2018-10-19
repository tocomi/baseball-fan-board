class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.references :team, foreign_key: true
      t.text :comment

      t.timestamps
    end
  end
end
