import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

	 private env = environment;

  constructor(private httpClient: HttpClient) { }

  public UploadFile(fileData: any): Observable<any> {

  	return this.httpClient.post<any>(`${this.env.apiUrl}/upload/file`, fileData)
  }
}
