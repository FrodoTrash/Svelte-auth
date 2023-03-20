migrate((db) => {
  const collection = new Collection({
    "id": "zuty1awymlv1e0x",
    "created": "2023-03-20 16:31:14.975Z",
    "updated": "2023-03-20 16:31:14.975Z",
    "name": "messages",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "svouatyw",
        "name": "content",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 3,
          "max": 150,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "rhyxjkqj",
        "name": "user",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zuty1awymlv1e0x");

  return dao.deleteCollection(collection);
})
