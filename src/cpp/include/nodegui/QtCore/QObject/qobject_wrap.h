#pragma once

#include <napi.h>

#include <QPointer>

#include "QtCore/QObject/nobject.hpp"
#include "QtCore/QObject/qobject_macro.h"

class QObjectWrap : public Napi::ObjectWrap<QObjectWrap> {
  QOBJECT_WRAPPED_METHODS_DECLARATION
 private:
  QPointer<NObject> instance;

 public:
  static Napi::Object init(Napi::Env env, Napi::Object exports);
  QObjectWrap(const Napi::CallbackInfo& info);
  ~QObjectWrap();
  NObject* getInternalInstance();
  // class constructor
  static Napi::FunctionReference constructor;
  // wrapped methods
};
