# Este arquivo é gerado automaticamente a partir do estado atual do banco de dados. Em vez de
# nº de edição deste arquivo, use o recurso de migração do Active Record para
    # modifique incrementalmente seu banco de dados e, em seguida, gere novamente essa definição de esquema.
    #
    # Observe que esta definição de schema.rb é a fonte oficial para o seu
    # esquema do banco de dados. Se você precisar criar o banco de dados do aplicativo em outro
    # sistema, você deve estar usando db: schema: load, não executando todas as migrações
    # do princípio. Este último é uma abordagem falha e insustentável (quanto mais migrações
    # você acumulará, mais lento será a execução e maior será a probabilidade de problemas).
    #
    # É altamente recomendável que você verifique este arquivo em seu sistema de controle de versão.

    ActiveRecord::Schema.define(version: 20170716154030) do

        create_table "messages", force: :cascade do |t|
          t.text "content"
          t.datetime "created_at", null: false
          t.datetime "updated_at", null: false
          t.text "threat"
        end
      
        create_table "responses", force: :cascade do |t|
          t.text "content"
          t.datetime "created_at", null: false
          t.datetime "updated_at", null: false
          t.text "threat"
        end
      
        create_table "users", force: :cascade do |t|
          t.datetime "created_at", null: false
          t.datetime "updated_at", null: false
          t.string "email", null: false
          t.string "encrypted_password", limit: 128, null: false
          t.string "confirmation_token", limit: 128
          t.string "remember_token", limit: 128, null: false
          t.index ["email"], name: "index_users_on_email"
          t.index ["remember_token"], name: "index_users_on_remember_token"
        end
      
      end
      