export class ObjectClone {

    constructor() { }

    /**
     * Clone object dissmissing variables binding
     * @param any object to clone
     */
    static cloneTo(object: any): any {
        return JSON.parse(JSON.stringify(object));
    }

}
