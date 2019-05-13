import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

	 uri:string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  public UploadFile(fileData: any): Observable<any> {

  	return this.httpClient.post<any>(`${this.uri}/upload/file`, fileData)
  }
}
