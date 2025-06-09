import { GetContacts } from "@/infra/contentful/contacts/get-contacts";
import { useEffect, useState } from "react";


export const useContacts = () => {
  const [contacts, setContacts] = useState<Record<string, string>[]>([]);
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
      setContacts(contacts as Record<string, string>[]);
    };
    fetchContacts();
  }, []);

  return contacts;
};