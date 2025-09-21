import React, { createContext, useState, ReactNode, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

type User = { name: string; email: string } | null;

type AuthContextType = {
  user: User;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  
    const loadSession = async () => {
      const storedSession = await AsyncStorage.getItem("@session");
      if (storedSession) {
        const parsedSession = JSON.parse(storedSession);
        setUser(parsedSession);
      }
    };
    loadSession();
  }, []);

  const login = async (email: string, password: string) => {
    if (!email.includes("@")) {
      Alert.alert("Invalid email format");
      return;
    }
    if (!password) {
      Alert.alert("Password required");
      return;
    }

    const storedUser = await AsyncStorage.getItem("@user");
    if (!storedUser) {
      Alert.alert("No user found. Please sign up first.");
      return;
    }

    const savedUser = JSON.parse(storedUser);
    if (savedUser.email !== email || savedUser.password !== password) {
      Alert.alert("Incorrect credentials");
      return;
    }

    setLoading(true); // show loader
    setTimeout(async () => {
      const sessionUser = { name: savedUser.name, email: savedUser.email };
      await AsyncStorage.setItem("@session", JSON.stringify(sessionUser));
      setUser(sessionUser);
      setLoading(false); 
    }, 1500);
  };

  const signup = async (name: string, email: string, password: string) => {
    if (!name || !email || !password) {
      Alert.alert("All fields required");
      return;
    }
    if (!email.includes("@")) {
      Alert.alert("Invalid email format");
      return;
    }
    if (password.length < 6) {
      Alert.alert("Password must be at least 6 characters");
      return;
    }

  
    const newUser = { name, email, password };
    await AsyncStorage.setItem("@user", JSON.stringify(newUser));

    setLoading(true); 
    setTimeout(async () => {
      const sessionUser = { name, email };
      await AsyncStorage.setItem("@session", JSON.stringify(sessionUser));
      setUser(sessionUser);
      setLoading(false); 
    }, 1500); 
  };

  const logout = async () => {
    await AsyncStorage.removeItem("@session");
 setUser(null)
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
