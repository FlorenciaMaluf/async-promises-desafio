import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";

test("Testeo el constructor del controller", async (t) => {
  const testConstructor = new ContactsController();
  t.deepEqual(
    await testConstructor.contacts.load(),
    await testConstructor.promesa
  );
});

test("Testeo el método processOptions", async (t) => {
  const model = new ContactsController();
  const contacts = await model.promesa;
  const testProcessOptions = new ContactsControllerOptions();
  testProcessOptions.action = "get";
  testProcessOptions.params = { id: 4, name: "" };
  t.deepEqual(contacts, await model.processOptions(testProcessOptions));
});
