import { EIdentity, EGender } from '@utilities/enums/user.enum';

export interface IUserProfile {
    nickName: string;
    email: string;
    id: string;
    uid: string;
    firstLogin: boolean;
    firstName: string;
    lastName: string;
    fullName: string;
    photo: string;
    identity: EIdentity;
    address?: string;
    gender?: EGender;
}

export interface IGoogleUser {
    name: string;
    email: string;
    family_name: string;
    given_name: string;
    granted_scopes: string;
    id: string;
    locale: string;
    picture: string;
    verified_email: boolean;
}
