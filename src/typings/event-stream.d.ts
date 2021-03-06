/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
declare module "event-stream" {
	import { Stream } from 'stream';
	import { ThroughStream } from 'through';
	
	function merge(...stream: Stream[]): ThroughStream;
	function concat(...stream: Stream[]): ThroughStream;
	function duplex(istream: Stream, ostream: Stream): ThroughStream;
	
	function through(write?: (data: any) => void, end?: () => void, 
		opts?: {autoDestroy: boolean; }): ThroughStream;
		
	function readArray<T>(array: T[]): ThroughStream;
	function writeArray<T>(cb: (err:Error, array:T[]) => void): ThroughStream;
	
	function mapSync<I,O>(cb: (data:I) => O): ThroughStream;
}