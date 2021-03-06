/// <reference path="../../build/Away3D.next.d.ts" />
declare module tests.library {
    class AWDParserTestEnvMap {
        private _view;
        private token;
        private _timer;
        private _torus;
        constructor();
        private resize();
        private render(dt);
        public onAssetComplete(e: away.events.AssetEvent): void;
        public onResourceComplete(e: away.events.LoaderEvent): void;
    }
}
