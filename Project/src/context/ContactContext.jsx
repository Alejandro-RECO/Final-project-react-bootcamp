import { createContext, useContext, useState } from "react";
import { supabase } from "../services/client";

export const ContactContext = createContext();

export const useContact = () => {
  const context = useContext(ContactContext);

  if (!context)
    throw new Error("useTask must be used whithin a TaskContextProvider");
  return context;
};

export const ContactContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [adding, setAdding] = useState(false);

  const getContacts = async () => {
    setLoading(true);
    const user = await supabase.auth.getUser();
    const userId = user.data.user.id;
    const { error, data } = await supabase
      .from("contacts")
      .select()
      .eq("userId", userId);
    // .eq("done", done);

    if (error) throw new Error("ERROR: ", error);

    setContacts(data);

    setLoading(false);
    console.log("Result: ", result);
  };

  return (
    <ContactContext.Provider
      value={{ contacts, loading, loading, getContacts }}
    >
      {children}
    </ContactContext.Provider>
  );
};
