mxDefaultKeyHandler
====================

Binds keycodes to actionnames in an editor.
This aggregates an internal `handler` and extends the implementation
of `mxKeyHandler.escape` to not only cancel the editing,
but also hide the properties dialog
and fire an <mxEditor.escape> event via `editor`.
An instance of this class is created by mxEditor and
stored in mxEditor.keyHandler.

