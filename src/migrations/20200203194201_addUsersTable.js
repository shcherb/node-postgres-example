
exports.up = function(knex) {
	return knex.schema
    .createTable('roles', function (table) {
		table.increments('id').primary();
		table.string('name', 1000).notNullable();
	 })
	 .createTable('users', function (table) {
       table.increments('id').primary();
       table.string('first_name', 255).notNullable();
	   table.string('last_name', 255).notNullable();
       table.bigInteger('roleId').references('id').inTable('roles').notNullable();
	   table.timestamps();
    });
};

exports.down = function(knex) {
	return knex.schema
	.dropTable("users")
	.dropTable("roles");
};

exports.config = { transaction: false };
