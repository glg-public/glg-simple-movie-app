import { action, makeObservable, observable, computed } from "mobx";
import { Movie } from "../../definitions/Movie";

export class MediaDetailStore {
  @observable private _media: Movie | undefined;

  constructor() {
    makeObservable(this);
  }

  @action
  public setDocument(media: Movie): void {
    this._media = media;
  }

  @computed
  public get media(): Movie {
    return this._media!;
  }
}
