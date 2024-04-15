import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../../constants';
import { Company } from '../../models/Company';

@Injectable({
  providedIn: 'root'
})
export class CompanyAPIServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCompanies(): Observable<Company[]> {
    let res = this.http.get<Company[]>(`${BASE_URL}/companies/`)
    console.log(res)
    return res
  }
}
