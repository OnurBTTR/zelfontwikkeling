import type {File, Image} from '~/types/sofie'
import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from '@vue/composition-api';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: number | string; output: number | string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: string; output: string; }
  DateTime: { input: string; output: string; }
  Email: { input: string; output: string; }
  File: { input: File; output: File; }
  Iban: { input: string; output: string; }
  Image: { input: Image; output: Image; }
  JSON: { input: any; output: any; }
  Mixed: { input: any; output: any; }
  Null: { input: null; output: null; }
  Upload: { input: any; output: any; }
  Uuid: { input: string; output: string; }
};

export type Address = {
  __typename?: 'Address';
  capabilities: Array<Capability>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  geodata?: Maybe<Scalars['JSON']['output']>;
  house_number?: Maybe<Scalars['String']['output']>;
  house_number_suffix?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  publish_at?: Maybe<Scalars['DateTime']['output']>;
  published: Scalars['Boolean']['output'];
  street?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  zipcode?: Maybe<Scalars['String']['output']>;
};

export type Capability = {
  __typename?: 'Capability';
  name: Scalars['String']['output'];
};

export type Category = {
  __typename?: 'Category';
  active_image?: Maybe<Scalars['Image']['output']>;
  ancestors: Array<Category>;
  capabilities: Array<Capability>;
  children: Array<Category>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  depth?: Maybe<Scalars['Int']['output']>;
  descendants: Array<Category>;
  id: Scalars['Int']['output'];
  images: Array<Scalars['Image']['output']>;
  name: Scalars['String']['output'];
  parent?: Maybe<Category>;
  parent_id?: Maybe<Scalars['Int']['output']>;
  seo?: Maybe<Seo>;
  slug: Scalars['String']['output'];
  text?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type Form = {
  __typename?: 'Form';
  fields: Array<FormField>;
  id: Scalars['Int']['output'];
  schema: Scalars['JSON']['output'];
  schema_v2: Scalars['Mixed']['output'];
  slug: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  uuid: Scalars['Uuid']['output'];
};

export type FormData = {
  __typename?: 'FormData';
  fields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['Int']['output'];
};

export type FormField = {
  __typename?: 'FormField';
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  options?: Maybe<Scalars['String']['output']>;
  position: Scalars['Int']['output'];
  regex?: Maybe<Scalars['String']['output']>;
  required?: Maybe<Scalars['Boolean']['output']>;
  type: Scalars['String']['output'];
  unique?: Maybe<Scalars['Boolean']['output']>;
};

export type FormFieldAttachment = {
  attachment: Scalars['Upload']['input'];
  field_name: Scalars['String']['input'];
};

export type FormSubmitResponse = {
  __typename?: 'FormSubmitResponse';
  confirm_url?: Maybe<Scalars['String']['output']>;
};

export enum Locale {
  Nl = 'nl'
}

export type Menu = {
  __typename?: 'Menu';
  items: Array<MenuItem>;
  name?: Maybe<Scalars['String']['output']>;
};

export type MenuItem = {
  __typename?: 'MenuItem';
  capability?: Maybe<Scalars['String']['output']>;
  children: Array<MenuItem>;
  target?: Maybe<Scalars['String']['output']>;
  text: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptInvite?: Maybe<Scalars['Boolean']['output']>;
  changePassword?: Maybe<Scalars['Null']['output']>;
  disableTwoFactor?: Maybe<Scalars['Boolean']['output']>;
  enableTwoFactor?: Maybe<Scalars['Boolean']['output']>;
  generateTwoFactorSecret?: Maybe<TwoFactorSecret>;
  login?: Maybe<Scalars['String']['output']>;
  logout?: Maybe<Scalars['Boolean']['output']>;
  requestPasswordReset?: Maybe<Scalars['Boolean']['output']>;
  resetPassword?: Maybe<Scalars['Boolean']['output']>;
  submitForm: FormSubmitResponse;
};


export type MutationAcceptInviteArgs = {
  email: Scalars['Email']['input'];
  invite: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationChangePasswordArgs = {
  current_password: Scalars['String']['input'];
  new_password: Scalars['String']['input'];
  new_password_confirm: Scalars['String']['input'];
};


export type MutationEnableTwoFactorArgs = {
  otp: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['Email']['input'];
  password: Scalars['String']['input'];
  two_factor_code?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRequestPasswordResetArgs = {
  email: Scalars['Email']['input'];
};


export type MutationResetPasswordArgs = {
  email: Scalars['Email']['input'];
  password: Scalars['String']['input'];
  password_confirmation: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationSubmitFormArgs = {
  attachments?: InputMaybe<Array<FormFieldAttachment>>;
  form_data: Scalars['String']['input'];
  form_id: Scalars['ID']['input'];
};

export type Page = {
  __typename?: 'Page';
  active_image?: Maybe<Scalars['Image']['output']>;
  children: Array<Page>;
  images: Array<Scalars['Image']['output']>;
  parent?: Maybe<Page>;
  seo?: Maybe<Seo>;
  slug: Scalars['String']['output'];
  template: Template;
  template_name: Scalars['String']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Pagination = {
  /** Current page of the cursor */
  current_page: Scalars['Int']['output'];
  /** Number of the first item returned */
  from?: Maybe<Scalars['Int']['output']>;
  /** Determines if cursor has more pages after the current page */
  has_more_pages: Scalars['Boolean']['output'];
  /** The last page (number of pages) */
  last_page: Scalars['Int']['output'];
  /** Number of items returned per page */
  per_page: Scalars['Int']['output'];
  /** Number of the last item returned */
  to?: Maybe<Scalars['Int']['output']>;
  /** Number of total items selected by the query */
  total: Scalars['Int']['output'];
};

export type PasswordRule = {
  __typename?: 'PasswordRule';
  message: Scalars['String']['output'];
  type: PasswordRuleType;
  value?: Maybe<Scalars['Mixed']['output']>;
};

export enum PasswordRuleType {
  Letters = 'Letters',
  Max = 'Max',
  Min = 'Min',
  MixedCase = 'MixedCase',
  Numbers = 'Numbers',
  Symbols = 'Symbols'
}

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  currentTenantInfo?: Maybe<Tenant_3af8041b6556776eda1312e7c8acaed7>;
  form?: Maybe<Form>;
  me?: Maybe<User_07e75d37dfdb1fad1b23e74888c041b4>;
  menu?: Maybe<Menu>;
  menus: Array<Menu>;
  page?: Maybe<Page>;
  passwordRules: Array<PasswordRule>;
  settings: Array<Setting>;
  tenants?: Maybe<TenantPagination>;
  vehicle?: Maybe<Vehicle>;
};


export type QueryCategoriesArgs = {
  hierarchy?: InputMaybe<Scalars['Boolean']['input']>;
  resource_id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryFormArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMenuArgs = {
  name: Scalars['String']['input'];
};


export type QueryMenusArgs = {
  names?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPageArgs = {
  segments?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTenantsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryVehicleArgs = {
  license_plate: Scalars['String']['input'];
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['Int']['output'];
  label: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Seo = {
  __typename?: 'Seo';
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_follow?: Maybe<Scalars['Boolean']['output']>;
  meta_index?: Maybe<Scalars['Boolean']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
};

export type Setting = {
  __typename?: 'Setting';
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Mixed']['output']>;
};

export type Template = TemplateStandaard;

export type TemplateStandaard = {
  __typename?: 'TemplateStandaard';
  capabilities: Array<Capability>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  tekst?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type Tenant = {
  __typename?: 'Tenant';
  active_image?: Maybe<Scalars['Image']['output']>;
  capabilities: Array<Capability>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  domain: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  images: Array<Scalars['Image']['output']>;
  locales: Array<Scalars['String']['output']>;
  seo?: Maybe<Seo>;
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type TenantPagination = Pagination & {
  __typename?: 'TenantPagination';
  /** Current page of the cursor */
  current_page: Scalars['Int']['output'];
  /** List of items on the current page */
  data: Array<Tenant>;
  /** Number of the first item returned */
  from?: Maybe<Scalars['Int']['output']>;
  /** Determines if cursor has more pages after the current page */
  has_more_pages: Scalars['Boolean']['output'];
  /** The last page (number of pages) */
  last_page: Scalars['Int']['output'];
  /** Number of items returned per page */
  per_page: Scalars['Int']['output'];
  /** Number of the last item returned */
  to?: Maybe<Scalars['Int']['output']>;
  /** Number of total items selected by the query */
  total: Scalars['Int']['output'];
};

export type Tenant_3af8041b6556776eda1312e7c8acaed7 = {
  __typename?: 'Tenant_3af8041b6556776eda1312e7c8acaed7';
  active_image?: Maybe<Scalars['Image']['output']>;
  seo?: Maybe<Seo>;
  title: Scalars['String']['output'];
};

export type TwoFactorSecret = {
  __typename?: 'TwoFactorSecret';
  app: Scalars['String']['output'];
  email: Scalars['Email']['output'];
  secret: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  _?: Maybe<Scalars['String']['output']>;
};

export type User_07e75d37dfdb1fad1b23e74888c041b4 = {
  __typename?: 'User_07e75d37dfdb1fad1b23e74888c041b4';
  active_image?: Maybe<Scalars['Image']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  capabilities: Array<Capability>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['Email']['output'];
  first_name: Scalars['String']['output'];
  images: Array<Scalars['Image']['output']>;
  initials: Scalars['String']['output'];
  last_login?: Maybe<Scalars['DateTime']['output']>;
  last_name: Scalars['String']['output'];
  name: Scalars['String']['output'];
  published: Scalars['Boolean']['output'];
  /** @deprecated Use roles field instead. */
  role?: Maybe<Role>;
  roles: Array<Role>;
  tenants: Array<Tenant>;
  tenants_count?: Maybe<Scalars['Int']['output']>;
  two_factor_enabled?: Maybe<Scalars['Boolean']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  uuid: Scalars['Uuid']['output'];
};


export type User_07e75d37dfdb1fad1b23e74888c041b4AvatarArgs = {
  w?: InputMaybe<Scalars['Int']['input']>;
};

export type Vehicle = {
  __typename?: 'Vehicle';
  brand?: Maybe<Scalars['String']['output']>;
  license_plate?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
};

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User_07e75d37dfdb1fad1b23e74888c041b4', avatar?: string | null, name: string } | null };

export type TenantsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type TenantsQuery = { __typename?: 'Query', tenants?: { __typename?: 'TenantPagination', current_page: number, per_page: number, last_page: number, total: number, data: Array<{ __typename?: 'Tenant', id: number, title: string }> } | null };

export type VehicleQueryVariables = Exact<{
  licensePlate: Scalars['String']['input'];
}>;


export type VehicleQuery = { __typename?: 'Query', vehicle?: { __typename?: 'Vehicle', license_plate?: string | null, brand?: string | null, model?: string | null } | null };


export const MeDocument = gql`
    query me {
  me {
    avatar
    name
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a Vue component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useMeQuery();
 */
export function useMeQuery(options: VueApolloComposable.UseQueryOptions<MeQuery, MeQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<MeQuery, MeQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<MeQuery, MeQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<MeQuery, MeQueryVariables>(MeDocument, {}, options);
}
export function useMeLazyQuery(options: VueApolloComposable.UseQueryOptions<MeQuery, MeQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<MeQuery, MeQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<MeQuery, MeQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, {}, options);
}
export type MeQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<MeQuery, MeQueryVariables>;
export const TenantsDocument = gql`
    query tenants($limit: Int, $page: Int) {
  tenants(limit: $limit, page: $page) {
    current_page
    data {
      id
      title
    }
    per_page
    last_page
    total
  }
}
    `;

/**
 * __useTenantsQuery__
 *
 * To run a query within a Vue component, call `useTenantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTenantsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useTenantsQuery({
 *   limit: // value for 'limit'
 *   page: // value for 'page'
 * });
 */
export function useTenantsQuery(variables: TenantsQueryVariables | VueCompositionApi.Ref<TenantsQueryVariables> | ReactiveFunction<TenantsQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<TenantsQuery, TenantsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TenantsQuery, TenantsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TenantsQuery, TenantsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<TenantsQuery, TenantsQueryVariables>(TenantsDocument, variables, options);
}
export function useTenantsLazyQuery(variables: TenantsQueryVariables | VueCompositionApi.Ref<TenantsQueryVariables> | ReactiveFunction<TenantsQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<TenantsQuery, TenantsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TenantsQuery, TenantsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TenantsQuery, TenantsQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<TenantsQuery, TenantsQueryVariables>(TenantsDocument, variables, options);
}
export type TenantsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<TenantsQuery, TenantsQueryVariables>;
export const VehicleDocument = gql`
    query vehicle($licensePlate: String!) {
  vehicle(license_plate: $licensePlate) {
    license_plate
    brand
    model
  }
}
    `;

/**
 * __useVehicleQuery__
 *
 * To run a query within a Vue component, call `useVehicleQuery` and pass it any options that fit your needs.
 * When your component renders, `useVehicleQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useVehicleQuery({
 *   licensePlate: // value for 'licensePlate'
 * });
 */
export function useVehicleQuery(variables: VehicleQueryVariables | VueCompositionApi.Ref<VehicleQueryVariables> | ReactiveFunction<VehicleQueryVariables>, options: VueApolloComposable.UseQueryOptions<VehicleQuery, VehicleQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<VehicleQuery, VehicleQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<VehicleQuery, VehicleQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<VehicleQuery, VehicleQueryVariables>(VehicleDocument, variables, options);
}
export function useVehicleLazyQuery(variables?: VehicleQueryVariables | VueCompositionApi.Ref<VehicleQueryVariables> | ReactiveFunction<VehicleQueryVariables>, options: VueApolloComposable.UseQueryOptions<VehicleQuery, VehicleQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<VehicleQuery, VehicleQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<VehicleQuery, VehicleQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<VehicleQuery, VehicleQueryVariables>(VehicleDocument, variables, options);
}
export type VehicleQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<VehicleQuery, VehicleQueryVariables>;