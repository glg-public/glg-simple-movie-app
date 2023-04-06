import { action, makeObservable, observable, computed } from "mobx";
import { Movie } from "../../definitions/Movie";

export class MediaStore {
  @observable private _media: Movie[];

  constructor() {
    makeObservable(this);
    this._media = [];
  }

  @action
  public setDocuments(media: Movie[]): void {
    this._media = media;
  }

  @computed
  public get media(): Movie[] {
    return this._media;
  }
}
