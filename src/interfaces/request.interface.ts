import { Request } from 'express';

export interface FormRequest extends Request {
  fields?: any;
  files?: any
}