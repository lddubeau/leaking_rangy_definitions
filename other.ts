// This should fail. The reason it does not fail is that the other
// file imports rangy and the symbols in the type definition file are
// leaked into the global space. This file is a *module* in which
// rangy was never imported!!
rangy.getSelection();

export function blah(): void {}
