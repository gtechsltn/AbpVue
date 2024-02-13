/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Volo_Abp_FeatureManagement_GetFeatureListResultDto } from "../models/Volo_Abp_FeatureManagement_GetFeatureListResultDto";
import type { Volo_Abp_FeatureManagement_UpdateFeaturesDto } from "../models/Volo_Abp_FeatureManagement_UpdateFeaturesDto";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class FeaturesService {
  /**
   * @param providerName
   * @param providerKey
   * @returns Volo_Abp_FeatureManagement_GetFeatureListResultDto Success
   * @throws ApiError
   */
  public static getApiFeatureManagementFeatures(
    providerName?: string,
    providerKey?: string,
  ): CancelablePromise<Volo_Abp_FeatureManagement_GetFeatureListResultDto> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/feature-management/features",
      query: {
        providerName: providerName,
        providerKey: providerKey,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Server Error`,
        501: `Server Error`,
      },
    });
  }
  /**
   * @param providerName
   * @param providerKey
   * @param requestBody
   * @returns any Success
   * @throws ApiError
   */
  public static putApiFeatureManagementFeatures(
    providerName?: string,
    providerKey?: string,
    requestBody?: Volo_Abp_FeatureManagement_UpdateFeaturesDto,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/api/feature-management/features",
      query: {
        providerName: providerName,
        providerKey: providerKey,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Server Error`,
        501: `Server Error`,
      },
    });
  }
  /**
   * @param providerName
   * @param providerKey
   * @returns any Success
   * @throws ApiError
   */
  public static deleteApiFeatureManagementFeatures(
    providerName?: string,
    providerKey?: string,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/api/feature-management/features",
      query: {
        providerName: providerName,
        providerKey: providerKey,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Server Error`,
        501: `Server Error`,
      },
    });
  }
}
