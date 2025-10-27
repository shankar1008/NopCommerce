export interface UserCredentials {
    email: string;
    password: string;
}

export interface RegistrationData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;

}

export interface ProductFilter {
    category?: string;
    manufacturer?: string;
    priceRange?: {min: number; max: number;};
    sortBy?: string;
}

export interface ShippingAddress {
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    city: string;
    address: string;
    zipCode: string;
    phoneNumber: string;
}

export interface TestData {
    users: {
        valid: UserCredentials;
        invalid: UserCredentials;
        newUser: RegistrationData;
    };
    products: {
        searchTerm: string;
        category: string;
        manufacturer: string;
    };
    shipping: ShippingAddress;
}