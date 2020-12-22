import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("products").del();

    // Inserts seed entries
    await knex("products").insert([
        { id_products: 1, name: "Camiseta", price: 10, description: "Tamanho P", category: "Roupa" },
        { id_products: 2, name: "Blusa", price: 10, description: "Tamanho P", category: "Roupa" },
        { id_products: 3, name: "Casaco", price: 10, description: "Tamanho P", category: "Roupa" }
    ]);
};
