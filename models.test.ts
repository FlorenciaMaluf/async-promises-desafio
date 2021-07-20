import test from "ava";
import { ContactsCollection } from "./models";
import { ContactsControllerOptions, ContactsController } from "./controllers";

test("Testeo el load del modelo", async (t) => {
  const model = new ContactsCollection();
  t.deepEqual(model.data, await model.load());
});

test("Testeo el addOne del modelo", (t) => {
  const model = new ContactsCollection();
  const mockContact = {
    id: 30,
    name: "Marce",
  };
  model.addOne(mockContact);
  t.deepEqual(model.getAll(), [mockContact]);
});

test("Testeo el save del modelo", async (t) => {
  const model = new ContactsCollection();
  const modelDos = new ContactsController();
  const testSave = new ContactsControllerOptions();
  testSave.action = "save";
  testSave.params = { id: 55, name: "Florencia" };
  t.deepEqual(model.data, await modelDos.processOptions(testSave));
});

test("Testeo el getOneById del modelo", (t) => {
  const model = new ContactsCollection();
  const mockContact = {
    id: 31,
    name: "Marce",
  };
  model.addOne(mockContact);
  const one = model.getOneById(31);
  t.deepEqual(one, mockContact);
});
