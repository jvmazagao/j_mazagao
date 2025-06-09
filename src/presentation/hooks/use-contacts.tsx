import { GetContacts } from "@/infra/contentful/contacts/get-contacts";
import { useEffect, useState } from "react";
import { getContactIcon } from "../utils/contact-utils";

export const useContacts = () => {
  const [contacts, setContacts] = useState<{ title: string, value: string, icon: React.ReactNode }[]>([]);
  const getContacts = new GetContacts();

  const fallback = () => ([
    {
      title: "Email",
      value: "mailto:jvmazagao+personal_blog@gmail.com",
    },
    {
      title: "GitHub",
      value: "https://github.com/jvmazagao",
    },
    {
      title: "LinkedIn",
      value: "https://linkedin.com/in/jvmazagao",
    },
  ]);



  useEffect(() => {
    const fetchContacts = async () => {
      const contacts = await getContacts.getContacts(fallback);
      const contactsWithIcons = contacts.map((contact: { title: string, value: string }) => ({
        title: contact.title,
        value: contact.value,
        icon: getContactIcon(contact.title),
      }));
      setContacts(contactsWithIcons);
    };
    fetchContacts();
  }, []);

  return contacts;
};