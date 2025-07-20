/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** A local time string (i.e., with no associated timezone) in 24-hr `HH:mm[:ss[.SSS]]` format, e.g. `14:25` or `14:25:06` or `14:25:06.123`. */
  LocalTime: { input: any; output: any; }
  /** A valid Azerbaijani phone number scalar type (+994 followed by operator code and 7 digits) */
  PhoneNumber: { input: any; output: any; }
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: { input: any; output: any; }
};

export type Admin = {
  __typename?: 'Admin';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['UUID']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export enum Country {
  Az = 'AZ'
}

export type Craftsman = {
  __typename?: 'Craftsman';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['UUID']['output'];
  idVerificationSubmissions: Array<IdVerificationSubmission>;
  idVerifiedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  isAcceptingOrders: Scalars['Boolean']['output'];
  languages: Array<Language>;
  professionVerificationSubmissions: Array<ProfessionVerificationSubmission>;
  professions: Array<Profession>;
  profileVerifiedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  user: User;
  workingDays: Array<DayOfWeek>;
  workingDistricts: Array<District>;
  workingEndTime?: Maybe<Scalars['LocalTime']['output']>;
  workingStartTime?: Maybe<Scalars['LocalTime']['output']>;
};

export type CreateNameInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** Days of the week */
export enum DayOfWeek {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY'
}

export type District = {
  __typename?: 'District';
  center: GeometryPoint;
  country: Country;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['UUID']['output'];
  names: Array<DistrictName>;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type DistrictName = {
  __typename?: 'DistrictName';
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  language: Language;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type File = {
  __typename?: 'File';
  contentType: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['UUID']['output'];
  originalName: Scalars['String']['output'];
  publicUrl?: Maybe<Scalars['String']['output']>;
  size: Scalars['Int']['output'];
  status: FileStatus;
  updatedAt: Scalars['DateTimeISO']['output'];
};

/** File status */
export enum FileStatus {
  Failed = 'FAILED',
  Pending = 'PENDING',
  Uploaded = 'UPLOADED'
}

/** File type */
export enum FileType {
  Avatar = 'AVATAR',
  IdCard = 'ID_CARD',
  ProfessionalLicense = 'PROFESSIONAL_LICENSE'
}

export type GenerateFilePostUrlResponse = {
  __typename?: 'GenerateFilePostUrlResponse';
  fields: Scalars['JSON']['output'];
  fileId: Scalars['UUID']['output'];
  uploadUrl: Scalars['String']['output'];
};

export type GeometryBoundaryInputType = {
  coordinates: Array<Scalars['JSON']['input']>;
  type: GeometryBoundaryType;
};

export enum GeometryBoundaryType {
  MultiPolygon = 'MULTI_POLYGON',
  Polygon = 'POLYGON'
}

export type GeometryPoint = {
  __typename?: 'GeometryPoint';
  coordinates: Array<Scalars['Float']['output']>;
};

export type GeometryPointInputType = {
  coordinates: Array<Scalars['Float']['input']>;
};

export type IdVerificationSubmission = {
  __typename?: 'IdVerificationSubmission';
  backImage: File;
  craftsman: Craftsman;
  createdAt: Scalars['DateTimeISO']['output'];
  frontImage: File;
  id: Scalars['UUID']['output'];
  rejectionReason?: Maybe<Scalars['String']['output']>;
  reviewer: Admin;
  status: VerificationSubmissionStatus;
  updatedAt: Scalars['DateTimeISO']['output'];
};

/** Supported languages for content */
export enum Language {
  Az = 'AZ',
  En = 'EN',
  Ru = 'RU'
}

export type Me = {
  __typename?: 'Me';
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  email?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  idVerifiedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  isVerified: Scalars['Boolean']['output'];
  lastName: Scalars['String']['output'];
  phoneNumber: Scalars['PhoneNumber']['output'];
  profileVerifiedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  type: ProfileType;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  approveIdVerification: IdVerificationSubmission;
  approveProfessionVerification: ProfessionVerificationSubmission;
  confirmFileUpload: File;
  createDistrict: District;
  createProfession: Profession;
  deleteFile: Scalars['Boolean']['output'];
  deleteProfession: Scalars['Boolean']['output'];
  generateFilePostUrl: GenerateFilePostUrlResponse;
  login: Tokens;
  otpLogin: Tokens;
  refreshTokenLogin: Tokens;
  register: User;
  rejectIdVerification: IdVerificationSubmission;
  rejectProfessionVerification: ProfessionVerificationSubmission;
  resendVerificationCode: Scalars['Boolean']['output'];
  resetForgottenPassword: Scalars['Boolean']['output'];
  sendForgotPasswordCode: Scalars['Boolean']['output'];
  sendOTPCode: Scalars['Boolean']['output'];
  setAcceptingOrders: Craftsman;
  setCommunicationLanguages: Craftsman;
  setWorkingDays: Craftsman;
  setWorkingDistricts: Craftsman;
  setWorkingHours: Craftsman;
  submitIdVerification: IdVerificationSubmission;
  submitProfessionVerification: ProfessionVerificationSubmission;
  updatePassword: Scalars['Boolean']['output'];
  verifyUser: Tokens;
};


export type MutationApproveIdVerificationArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationApproveProfessionVerificationArgs = {
  id: Scalars['UUID']['input'];
  professionId: Scalars['UUID']['input'];
};


export type MutationConfirmFileUploadArgs = {
  fileId: Scalars['UUID']['input'];
};


export type MutationCreateDistrictArgs = {
  AZ: CreateNameInput;
  EN: CreateNameInput;
  RU: CreateNameInput;
  boundary: GeometryBoundaryInputType;
  center: GeometryPointInputType;
  country: Country;
};


export type MutationCreateProfessionArgs = {
  AZ: CreateNameInput;
  EN: CreateNameInput;
  RU: CreateNameInput;
};


export type MutationDeleteFileArgs = {
  fileId: Scalars['UUID']['input'];
};


export type MutationDeleteProfessionArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationGenerateFilePostUrlArgs = {
  contentType: Scalars['String']['input'];
  fileName: Scalars['String']['input'];
  fileSize: Scalars['Float']['input'];
  fileType: FileType;
};


export type MutationLoginArgs = {
  password: Scalars['String']['input'];
  phoneNumber: Scalars['PhoneNumber']['input'];
  profileType: ProfileType;
};


export type MutationOtpLoginArgs = {
  code: Scalars['String']['input'];
  phoneNumber: Scalars['PhoneNumber']['input'];
  profileType: ProfileType;
};


export type MutationRefreshTokenLoginArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  email?: InputMaybe<Scalars['EmailAddress']['input']>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['PhoneNumber']['input'];
};


export type MutationRejectIdVerificationArgs = {
  id: Scalars['UUID']['input'];
  rejectionReason: Scalars['String']['input'];
};


export type MutationRejectProfessionVerificationArgs = {
  id: Scalars['UUID']['input'];
  rejectionReason: Scalars['String']['input'];
};


export type MutationResendVerificationCodeArgs = {
  phoneNumber: Scalars['PhoneNumber']['input'];
};


export type MutationResetForgottenPasswordArgs = {
  code: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  phoneNumber: Scalars['PhoneNumber']['input'];
};


export type MutationSendForgotPasswordCodeArgs = {
  phoneNumber: Scalars['PhoneNumber']['input'];
};


export type MutationSendOtpCodeArgs = {
  phoneNumber: Scalars['PhoneNumber']['input'];
};


export type MutationSetAcceptingOrdersArgs = {
  isAcceptingOrders: Scalars['Boolean']['input'];
};


export type MutationSetCommunicationLanguagesArgs = {
  languages: Array<Language>;
};


export type MutationSetWorkingDaysArgs = {
  workingDays: Array<DayOfWeek>;
};


export type MutationSetWorkingDistrictsArgs = {
  districtIds: Array<Scalars['UUID']['input']>;
};


export type MutationSetWorkingHoursArgs = {
  workingEndTime: Scalars['LocalTime']['input'];
  workingStartTime: Scalars['LocalTime']['input'];
};


export type MutationSubmitIdVerificationArgs = {
  backImageFileId: Scalars['UUID']['input'];
  fronfImageFileId: Scalars['UUID']['input'];
};


export type MutationSubmitProfessionVerificationArgs = {
  description: Scalars['String']['input'];
  fileIds: Array<Scalars['UUID']['input']>;
  profession: Scalars['String']['input'];
};


export type MutationUpdatePasswordArgs = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};


export type MutationVerifyUserArgs = {
  code: Scalars['String']['input'];
  phoneNumber: Scalars['PhoneNumber']['input'];
  profileType: VerifyUserProfileType;
};

export type Profession = {
  __typename?: 'Profession';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['UUID']['output'];
  isActive: Scalars['Boolean']['output'];
  names?: Maybe<Array<ProfessionName>>;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type ProfessionName = {
  __typename?: 'ProfessionName';
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  language: Language;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type ProfessionVerificationFile = {
  __typename?: 'ProfessionVerificationFile';
  createdAt: Scalars['DateTimeISO']['output'];
  file: File;
  id: Scalars['UUID']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type ProfessionVerificationSubmission = {
  __typename?: 'ProfessionVerificationSubmission';
  craftsman: Craftsman;
  createdAt: Scalars['DateTimeISO']['output'];
  description: Scalars['String']['output'];
  files: Array<ProfessionVerificationFile>;
  id: Scalars['UUID']['output'];
  profession: Scalars['String']['output'];
  rejectionReason?: Maybe<Scalars['String']['output']>;
  reviewer?: Maybe<Admin>;
  status: VerificationSubmissionStatus;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export enum ProfileType {
  Admin = 'ADMIN',
  Craftsman = 'CRAFTSMAN',
  Customer = 'CUSTOMER'
}

export type Query = {
  __typename?: 'Query';
  findDistrictsContainingPoint: Array<District>;
  getCraftsman: Craftsman;
  getDistrictsByCountry: Array<District>;
  getFileUrl: Scalars['String']['output'];
  listIdVerifications: Array<IdVerificationSubmission>;
  listMyIdVerifications: Array<IdVerificationSubmission>;
  listMyProfessionVerifications: Array<ProfessionVerificationSubmission>;
  listProfessionVerifications: Array<ProfessionVerificationSubmission>;
  me: Me;
  professions: Array<Profession>;
  searchProfessions: Array<Profession>;
};


export type QueryFindDistrictsContainingPointArgs = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};


export type QueryGetCraftsmanArgs = {
  craftsmanId?: InputMaybe<Scalars['UUID']['input']>;
};


export type QueryGetDistrictsByCountryArgs = {
  country: Country;
};


export type QueryGetFileUrlArgs = {
  fileId: Scalars['UUID']['input'];
};


export type QueryListIdVerificationsArgs = {
  craftsmanIds: Array<Scalars['UUID']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryListMyIdVerificationsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryListMyProfessionVerificationsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryListProfessionVerificationsArgs = {
  craftsmanIds: Array<Scalars['UUID']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySearchProfessionsArgs = {
  query: Scalars['String']['input'];
};

export type Tokens = {
  __typename?: 'Tokens';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  email?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  isVerified: Scalars['Boolean']['output'];
  lastName: Scalars['String']['output'];
  phoneNumber: Scalars['PhoneNumber']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export enum VerificationSubmissionStatus {
  Approved = 'APPROVED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export enum VerifyUserProfileType {
  Craftsman = 'CRAFTSMAN',
  Customer = 'CUSTOMER'
}

export type ApproveIdVerificationMutationVariables = Exact<{
  approveIdVerificationId: Scalars['UUID']['input'];
}>;


export type ApproveIdVerificationMutation = { __typename?: 'Mutation', approveIdVerification: { __typename?: 'IdVerificationSubmission', createdAt: any, id: any, rejectionReason?: string | null, status: VerificationSubmissionStatus, updatedAt: any } };

export type LoginMutationVariables = Exact<{
  password: Scalars['String']['input'];
  phoneNumber: Scalars['PhoneNumber']['input'];
  profileType: ProfileType;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Tokens', accessToken: string, refreshToken: string } };


export const ApproveIdVerificationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ApproveIdVerification"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"approveIdVerificationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"approveIdVerification"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"approveIdVerificationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rejectionReason"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<ApproveIdVerificationMutation, ApproveIdVerificationMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phoneNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PhoneNumber"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"phoneNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phoneNumber"}}},{"kind":"Argument","name":{"kind":"Name","value":"profileType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;