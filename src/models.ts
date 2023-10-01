type Associated = {
    fullName: string;
    cpf: string;
    rg: string;
    genderIdentity: string;
    nationality: string;
    maritalStatus: string;
    email: string;
    phoneNumber: string;
    cep: string;
    street: string;
    houseNumber: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    patients?: Patient; 
};

type Patient = Omit<Associated, 'patients'> & {
    medicalIllness: string[];
  };